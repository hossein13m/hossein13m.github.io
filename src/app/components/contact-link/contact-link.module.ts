import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactLinkComponent } from './contact-link.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
    declarations: [ContactLinkComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, MatTooltipModule, TranslocoModule],
    exports: [ContactLinkComponent],
})
export class ContactLinkModule {}
