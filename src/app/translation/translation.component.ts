import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
    selector: 'as-translation',
    templateUrl: 'app/translation/translation.html',
})

export class TranslationComponent implements OnInit {
    public translatedText: string;
    public supportedLangs: any[];
    private _translationService: TranslationService;

    constructor( translationService: TranslationService) {
        this._translationService = translationService;
    }

    public ngOnInit(): void {
       this.supportedLangs = [
        { display: 'English', value: 'en' },
        { display: 'French', value: 'fr' },
        ];
        this._selectLang('fr');
        this._subscribeToLangChanged();
    }

    public isCurrentLang(lang: string) {
        return lang === this._translationService.currentLang;
    }

    private _selectLang(lang: string) {
        this._translationService.use(lang);
        this._refreshText();
    }

    private _refreshText() {
        this.translatedText = this._translationService.instant('hello world');
    }

    private _subscribeToLangChanged() {
        return this._translationService.onLangChanged.subscribe(x => this._refreshText());
    }
}
