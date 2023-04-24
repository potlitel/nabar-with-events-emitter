import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  /**
   * Description
   *  */
  constructor(public _snackBar: MatSnackBar) {}

  collapsed = true;

  @Input()
  public itemsList!: {
    title: string;
    action: string;
    options: { title: string; action: string }[];
  }[];

  @Output()
  itemClicked: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Description
   * @returns {any}
   *  */
  ngOnInit(): void {}
  /**
   * Description
   * @param {SimpleChanges} changes
   * @returns {any}
   *  */
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
  }

  /**
   * Description
   * @param {any} item
   * @returns {any}
   *  */
  itemHasBeenClicked(item: any) {
    //alert(item);
    this.openSnackBar(item.title, 'Ok');
    this.itemClicked.emit(item.title);
  }

  /**
   * Description
   * @param {string} message
   * @param {string} action
   * @returns {any}
   *  */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
