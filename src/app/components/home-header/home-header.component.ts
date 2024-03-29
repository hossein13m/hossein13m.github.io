import { AfterViewInit, Component, Inject, type InjectionToken, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';
import { HeaderTypeEffectItems } from '../../const/home';
import type { NavigationRouteModel } from '../../models/navigationRoute.model';
import { NavigationRoutes } from '../../const/navigationRoutes';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
    public typed!: any;
    public buttons: Array<NavigationRouteModel> = NavigationRoutes.filter((item) => item.routeTitle !== 'Home!' && item.routeTitle !== 'About Me!');
    public selectedButton: NavigationRouteModel = this.buttons[0];
    private intervalId!: ReturnType<typeof setInterval>;

    constructor(@Inject(PLATFORM_ID) private platformId: InjectionToken<unknown>) {}

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.intervalId = setInterval(() => this.changeButtonText(), 4000);
        }
    }

    ngOnInit(): void {
        const options = {
            strings: HeaderTypeEffectItems,
            typeSpeed: 60,
            backSpeed: 60,
            showCursor: true,
            cursorChar: '|',
            loop: true,
        };

        isPlatformBrowser(this.platformId) && new Typed('#text', options);
    }

    public changeButtonText(): void {
        this.selectedButton =
            this.buttons[this.buttons.indexOf(this.selectedButton) >= this.buttons.length - 1 ? 0 : this.buttons.indexOf(this.selectedButton) + 1];
    }
}
