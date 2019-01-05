import {Component, Input, Output, EventEmitter, ElementRef , HostListener} from '@angular/core';


import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'alert-modal-content',
  template: `
    <div class="dialog-wrapper align-center" id="{{'sharedqueue-' + alertDialogUniqueTypeId + '-dialog'}}">
      <div class="modal-header d-block border-bottom-0">
        <img class="width3p5vw height7vh" src="{{alertImgPath}}" alt="info Icon"/>
      </div>
      <!-- <div class="modal-title font-weight-600 font-color-0c0c0d cursor-default padding-top2p1vh">Are You Sure?</div>-->
      <div class="modal-body">
        <p class="font-size14px font-color-424449 margin-bottom-0 cursor-default">{{alertMessage}}</p>
      </div>
      <div class="modal-footer modal-footer-buttons border-top-0">
        <button type="button" class="btn btn-outline-dark save-btn ripple" id="{{alertDialogUniqueTypeId}}-ok"
                (click)="continue()">Ok
        </button>
      </div>
    </div>
  `
})
export class AlertContent {
  @Input() alertMessage;
  @Input() alertImgPath;
  alertDialogUniqueTypeId;
  @Output() confirm = new EventEmitter<string>();

  continue() {
    this.confirm.emit();
  }

  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'dialog-modal-content',
  template: `
    <div class="dialog-wrapper align-center" id="{{'sharedqueue-' + dialogUniqueTypeId + '-dialog'}}">
      <div class="modal-header d-block border-bottom-0">
        <img class="width3p5vw height7vh" src="{{dialogImgPath}}" alt="Close Icon"/>
      </div>
      <!--<div class="modal-title font-weight-600 font-color-0c0c0d cursor-default padding-top2p1vh">Are You Sure?</div>-->
      <div class="modal-body">
        <p class="font-size14px font-color-424449 margin-bottom-0 cursor-default">{{dialogMessage}}</p>
      </div>
      <div class="modal-footer modal-footer-buttons border-top-0">
        <button type="button" class="btn btn-outline-dark save-btn ripple" id="{{dialogUniqueTypeId}}-ok"
                (click)="continue()">Ok
        </button>
        <button type="button" class="btn btn-outline-dark cancel-btn ripple  margin-right1p5vw"
        id="{{dialogUniqueTypeId}}-cancel" (click)="cancel()">Cancel
        </button>

      </div>
    </div>
  `
})
export class DialogContent {
  @Input() dialogMessage;
  @Input() dialogImgPath;
  @Input() dialogUniqueTypeId;
  @Output() action = new EventEmitter<string>();
  @Output() canceled = new EventEmitter<string>();

  constructor(public activeDialog: NgbActiveModal , private enterElement: ElementRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.enterElement.nativeElement.querySelector('button.cancel-btn').focus();
    }, 100);
  }

  continue() {
    this.action.emit();
  }

  cancel() {
    this.canceled.emit();
  }
}

@Component({
  selector: 'alert-component',
  template: ``
})
export class AlertComponent {
  modalOption: NgbModalOptions = {};

  constructor(private modalService: NgbModal) {
  }

  open() {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    const modalRef = this.modalService.open(AlertContent, this.modalOption);
  }
}
