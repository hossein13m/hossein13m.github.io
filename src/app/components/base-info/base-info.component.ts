import { Component } from '@angular/core';
import { BaseInfo } from '../../const/baseInfo';

@Component({
    selector: 'app-base-info',
    template: `
        <div *ngFor="let baseInfo of baseInfo" class="flex justify-between mb-2">
            <p class="flex item-center m-0">
                <mat-icon class="text-xs dark:text-white text-black">trip_origin</mat-icon>
                <span class="dark:text-white text-black">{{ baseInfo.subject }}:</span>
            </p>
            <p class="m-0">{{ baseInfo.answer }}</p>
        </div>
    `,
})
export class BaseInfoComponent {
    public baseInfo: Array<{ subject: string; answer: string }> = BaseInfo;

    constructor() {}
}
