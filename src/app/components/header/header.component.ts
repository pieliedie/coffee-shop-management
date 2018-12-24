import { Component, OnInit } from '@angular/core';

@Component({
    selector: "header-comp",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
    title: string = "this is the header";
    navigationItems: Array<string> = ['Home', 'Menu'];
    ngOnInit(){}
}