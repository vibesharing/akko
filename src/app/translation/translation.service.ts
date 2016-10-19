import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from './translation';


@Injectable()

export class TranslationService {
    public onLangChanged: EventEmitter<string> = new EventEmitter<string>();

    private _currentLang: string;
    private PLACEHOLDER: string = '%';

    constructor(
        @Inject(TRANSLATIONS) private _translations: any) {
    }

    public get currentLang(): string {
        return this._currentLang;
    }

    public use(lang: string): void {
        this._currentLang = lang;

        this.onLangChanged.emit(lang);

    }

    public instant(key: string, words?: string | string[]) {
        const translation: string = this._translate(key);

        if (!words) {
            return translation;
        }

        return this._replace(translation, words);
    }

    private _translate(key: string): string {
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return key;
    }

    private _replace(word: string, words: string | string[]) {
        let translation: string = word;

        const values: string[] = [].concat(words);
            values.forEach((element, index) => {
                translation = translation.replace(this.PLACEHOLDER.concat(<any>index), element);
        });
        console.log(translation);
        return translation;
    }
}

