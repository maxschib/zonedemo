import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  NgZone,
  OnInit,
  Renderer2,
} from '@angular/core';
import { getRandomColor } from './color.helper';

// FILE: node_modules\zone.js\dist\zone-evergreen.js
  // // global shared zoneAwareCallback to handle all event callback with capture = false
  // const globalZoneAwareCallback = function (event) {
  //   // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  //   // event will be undefined, so we need to use window.event
  //   event = event || _global.event;
  //   if (!event) {
  //       return;
  //   }

// FILE: node_modules\zone.js\lib\browser\browser.js
  // Zone.__load_patch('timers', function (global) {
  //   var set = 'set';
  //   var clear = 'clear';
  //   timers_1.patchTimer(global, set, clear, 'Timeout');
  //   timers_1.patchTimer(global, set, clear, 'Interval');
  //   timers_1.patchTimer(global, set, clear, 'Immediate');
  // });
  // Zone.__load_patch('requestAnimationFrame', function (global) {
  //   timers_1.patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  //   timers_1.patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  //   timers_1.patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  // });

// FILE: node_modules\codelyzer\node_modules\@angular\core\esm2015\src\zone\ng_zone.js
  // zone._inner = zone._inner.fork({
  //   name: 'angular',
  //   properties: (/** @type {?} */ ({ 'isAngularZone': true, 'maybeDelayChangeDetection': maybeDelayChangeDetection })),
  //   onInvokeTask: (/**
  //   * @param {?} delegate
  //   * @param {?} current
  //   * @param {?} target
  //   * @param {?} task
  //   * @param {?} applyThis
  //   * @param {?} applyArgs
  //   * @return {?}
  //   */
  //   (delegate, current, target, task, applyThis, applyArgs) => {
  //       try {
  //           onEnter(zone);
  //           return delegate.invokeTask(target, task, applyThis, applyArgs);
  //       }
  //       finally {
  //           if (maybeDelayChangeDetection && task.type === 'eventTask') {
  //               maybeDelayChangeDetection();
  //           }
  //           onLeave(zone);
  //       }
  //   }),
  //   onInvoke: (/**
  //   * @param {?} delegate
  //   * @param {?} current
  //   * @param {?} target
  //   * @param {?} callback
  //   * @param {?} applyThis
  //   * @param {?=} applyArgs
  //   * @param {?=} source
  //   * @return {?}
  //   */
  //   (delegate, current, target, callback, applyThis, applyArgs, source) => {
  //       try {
  //           onEnter(zone);
  //           return delegate.invoke(target, callback, applyThis, applyArgs, source);
  //       }
  //       finally {
  //           onLeave(zone);
  //       }
  //   }),
  //   onHasTask: (/**
  //   * @param {?} delegate
  //   * @param {?} current
  //   * @param {?} target
  //   * @param {?} hasTaskState
  //   * @return {?}
  //   */
  //   (delegate, current, target, hasTaskState) => {
  //       delegate.hasTask(target, hasTaskState);
  //       if (current === target) {
  //           // We are only interested in hasTask events which originate from our zone
  //           // (A child hasTask event is not interesting to us)
  //           if (hasTaskState.change == 'microTask') {
  //               zone._hasPendingMicrotasks = hasTaskState.microTask;
  //               updateMicroTaskStatus(zone);
  //               checkStable(zone);
  //           }
  //           else if (hasTaskState.change == 'macroTask') {
  //               zone.hasPendingMacrotasks = hasTaskState.macroTask;
  //           }
  //       }
  //   }),
  //   onHandleError: (/**
  //   * @param {?} delegate
  //   * @param {?} current
  //   * @param {?} target
  //   * @param {?} error
  //   * @return {?}
  //   */
  //   (delegate, current, target, error) => {
  //       delegate.handleError(target, error);
  //       zone.runOutsideAngular((/**
  //       * @return {?}
  //       */
  //       () => zone.onError.emit(error)));
  //       return false;
  //   })


// FILE: node_modules\zone.js\dist\zone-evergreen.js
  // runTask(task, applyThis, applyArgs)
  // run(callback, applyThis, applyArgs, source) 
  // fork(zoneSpec)
  // runGuarded(callback, applyThis = null, applyArgs, source)

  //   function drainMicroTaskQueue() {
  //     if (!_isDrainingMicrotaskQueue) {
  //         _isDrainingMicrotaskQueue = true;
  //         while (_microTaskQueue.length) {
  //             const queue = _microTaskQueue;
  //             _microTaskQueue = [];
  //             for (let i = 0; i < queue.length; i++) {
  //                 const task = queue[i];
  //                 try {
  //                     task.zone.runTask(task, null, null);
  //                 }
  //                 catch (error) {
  //                     _api.onUnhandledError(error);
  //                 }
  //             }
  //         }
  //         _api.microtaskDrainDone();
  //         _isDrainingMicrotaskQueue = false;
  //     }
  // }

// FILE: node_modules\@angular\core\__ivy_ngcc__\fesm2015\core.js
  // zone._inner = zone._inner.fork({
  //   name: 'angular',
  //   properties: { 'isAngularZone': true, 'maybeDelayChangeDetection': maybeDelayChangeDetection },
  // onInvokeTask: (delegate, current, target, task, applyThis, applyArgs)
      //  onEnter(zone);
        //   function onEnter(zone) {
        //     zone._nesting++;
        //     if (zone.isStable) {
        //         zone.isStable = false;
        //         zone.onUnstable.emit(null);        <====
        //     }
        // }
      // onLeave(zone);
        //   function onLeave(zone) {
        //     zone._nesting--;
        //     checkStable(zone);
        //    }  
// ------------------------------------------------      
          //   function checkStable(zone) {
          //     if (zone._nesting == 0 && !zone.hasPendingMicrotasks && !zone.isStable) {
          //         try {
          //             zone._nesting++;
          //             zone.onMicrotaskEmpty.emit(null);        <====
          //         }
          //         finally {
          //             zone._nesting--;
          //             if (!zone.hasPendingMicrotasks) {
          //                 try {
          //                     zone.runOutsideAngular(() => zone.onStable.emit(null));        <====
          //                 }
          //                 finally {
          //                     zone.isStable = true;
          //                 }
          //             }
          //         }
          //     }
          // }

            //   this._zone.onMicrotaskEmpty.subscribe({           <====
            //     next: () => {
            //         this._zone.run(() => {
            //             this.tick();
            //         });
            //     }
            // });

// FILE: node_modules\codelyzer\node_modules\@angular\core\esm5\src\application_ref.js
  // ApplicationRef.prototype.tick = function ()
  // var e_1, _a, e_2, _b;
  // var _this = this;
  // if (this._runningTick) {
  //     throw new Error('ApplicationRef.tick is called recursively');
  // }
  // try {
  //     this._runningTick = true;
  //     try {
  //         for (var _c = __values(this._views), _d = _c.next(); !_d.done; _d = _c.next()) {
  //             var view = _d.value;
  //             view.detectChanges();
  //         }
  //     }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck, OnInit, AfterViewInit {
  style: { 'background-color': string };
  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private renderer: Renderer2,
    private element: ElementRef
  ) {}
  ngAfterViewInit(): void {
    // this.ngZone.runOutsideAngular(() => {
    //   this.renderer.listen(
    //     this.element.nativeElement,
    //     'click',
    //     this.repaint.bind(this)
    //   );
    // });
  }
  ngOnInit(): void {
    
    this.ngZone.onUnstable.subscribe(() => {
      console.log('zone became unstable');
    });
    
    this.ngZone.onStable.subscribe(() => {
      console.log('zone became stable');
      console.log('********************');
    });
    
    this.ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('No more micro tasks');
    });
    
    this.ngZone.onError.subscribe((err) => {
      console.log('Error encountered in zone', err);
    });

    console.log('Normal 1');

    // macro
    // setTimeout(() => {
      // console.log('setTimeout 1');

      // micro
      // Promise.resolve().then(() => {
      //   console.log('Promise 2');
      // });

    // });

    // // macro
    // setTimeout(() => {
    //   console.log('setTimeout 2');
    // });

    // Promise.resolve().then(() => {
    //   console.log('Promise 1');
    // });
    
    // requestAnimationFrame(() => {
    //   console.log('Animation 1');
    // });
    
    // requestAnimationFrame(() => {
    //   console.log('Animation 2');
    // });

  }

  ngDoCheck(): void {
    console.log('do check');
  }

  repaint() {
    // console.log('outside run ', NgZone.isInAngularZone());
    // this.ngZone.runTask(() => {
    this.style = { 'background-color': getRandomColor() };
    // this.element.nativeElement.test.name = 1;
    console.log('inside run ', NgZone.isInAngularZone());
    // });
  }
  paint() {
    console.log('inside paint ', NgZone.isInAngularZone());
  }
}
