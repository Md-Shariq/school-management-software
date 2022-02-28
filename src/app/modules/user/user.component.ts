import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchInputValue: string = '';
  showSearchList: boolean = false;
  @ViewChild('searchBar') searchBar: ElementRef | undefined;
  @ViewChild('searchedResultArea') searchedResultArea: ElementRef | undefined;
  isSearchFocused: boolean = false;
  homeSelect: string;
  @ViewChild("searchInput") searchInput: ElementRef | undefined;

  focusOnFirstName() {
    this.searchInput!.nativeElement.focus();
  }

  constructor(private router: Router,
    private route:ActivatedRoute,
    private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.searchedResultArea && this.searchBar) {
        if (e.target !== this.searchBar!.nativeElement && e.target !== this.searchedResultArea!.nativeElement) {
          this.showSearchList = false;
        }
      }

    });
    this.homeSelect = this.router.url;
  }

  ngOnInit(): void {
  }

  onSearchInputChange() {
    if (this.searchInputValue.length > 2) {
      this.showSearchList = true;
    } else {
      this.showSearchList = false;
    }
  }

  navigateToSearchedList() {
    this.router.navigate(['user/searched-list']);
    this.showSearchList = false;
  }

  onSearchFocus() {
    console.log('focus hua h');
    this.isSearchFocused = true;
  }

  onSearchBlur() {
    console.log('blur hua h');
    this.isSearchFocused = false;
    this.searchInputValue = '';
  }
  select() {
     this.router.events.subscribe(
       (event: any) => {
        if (event instanceof NavigationEnd) {
         this.homeSelect= this.router.url;

     }
    }
   );
    
  }
}
