import { DecimalPipe } from '@angular/common';
import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive({
    selector: '[formatadorMonetario]',
})
export class FormatadorMonetarioDirective implements ControlValueAccessor, OnInit {

    private destroy$ = new Subject();
    private readonly DEFAULT_LOCALE: string = 'pt-BR';
    private readonly DEFAULT_PIPE: string = '1.0-5';
    lastValue: any;
    onTouched = () => { };
    onChange = (_: any) => { };

    constructor(
        private el: ElementRef,
        private decimalPipe: DecimalPipe) {

    }

    writeValue(value: any): void {
        this.el.nativeElement.value = this.lastValue = value != null ? value : null;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.el.nativeElement.disabled = isDisabled;
    }

    ngOnInit() {
        this.formatAndSetValue(this.el.nativeElement.value);
    }

    @HostListener('focus', ['$event'])
    onFocus($event: any) {
        let eventValue: string = $event.target.value;
        this.formatAndSetValue(eventValue);
    }

    @HostListener('blur', ['$event'])
    onBlur($event: any) {
        let eventValue: string = $event.target.value;
        if (!eventValue && eventValue != '0') {
            this.setValue(null || '');
            return;
        }
        this.formatAndSetValue(eventValue, false);
    }

    @HostListener('keyup', ['$event'])
    onKeyUp($event: any) {
        let eventValue: string = $event.target.value;
        this.formatAndSetValue(eventValue);
    }

    formatAndSetValue(value: string, escape: boolean = true): void {
        let valueCleaned: string = this.cleanValue(value);
        if (this.needScape(valueCleaned) && escape) {
            this.setValue(valueCleaned);
            return;
        }

        let valueParsed = this.parseValueToFloat(valueCleaned);
        let valueFormatted = this.formatValue(valueParsed);
        this.setValue(valueFormatted);
    }

    cleanAndSetValue(value: string): void {
        let valueCleaned = this.cleanAndParseValue(value);
        this.setValue(valueCleaned);
    }

    cleanAndParseValue(value: string): number | string {
        let valueCleaned: string = this.cleanValue(value);
        let valueConverted: number | string = this.parseValueToFloat(valueCleaned);

        return valueConverted;
    }

    cleanValue(value: string): string {
        const isNegative = value.startsWith('-') || value.endsWith('-');
        let inputVal: string = !!value ? value.toString().replace(/[^\d+,]/g, '').replace(/,,/g, ',') : '';

        return isNegative ? '-' + inputVal : inputVal;
    }

    parseValueToFloat(value: string): number | string {
        let valueConverted: number = 0;

        if (!!value) {
            let valueReplaced = value.replace(/,/g, '.');
            valueConverted = parseFloat(valueReplaced);
        }

        return valueConverted;
    }

    formatValue(v: number | string): string {
        return this.decimalPipe.transform(v, this.DEFAULT_PIPE, this.DEFAULT_LOCALE) || '';
    }

    setValue(v: string | number): void {
        this.writeValue(v);
        return;
    }

    needScape(value: string): boolean {
        let commaIndex: number = value.lastIndexOf(',');
        let commaAtEnd: boolean = commaIndex === value.length - 1;
        let zeroAtEnd: boolean = !!value.match(/,[0-9]{0,3}0$/);
        let startMinus: boolean = !!value.match(/^-$/);

        return commaAtEnd || zeroAtEnd || startMinus;
    }

    ngOnDestroy() {
        this.cleanAndSetValue(this.el.nativeElement.value);
        this.destroy$.next();
        this.destroy$.complete();
    }

}