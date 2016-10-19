import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService} from './translation.service';

@Pipe({
    name: 'asTranslate',
    pure: false
})

export class TranslationPipe implements PipeTransform {

    constructor(private _translationService: TranslationService) {

    }
    transform(value: string, args: string | string[]): any {
        if (!value) {
            return;
        }
        return this._translationService.instant(value, args);
    }
}
