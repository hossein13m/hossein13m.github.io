import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    template: `
        <div class="p-4 flex flex-col">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <app-contact-link [contactLinkType]="'social'"></app-contact-link>
                <app-contact-link [contactLinkType]="'openSource'"></app-contact-link>
                <app-contact-link [contactLinkType]="'content'"></app-contact-link>
            </div>
            <app-contact-form></app-contact-form>
        </div>
    `,
})
export class ContactComponent {
    constructor() {}
}
