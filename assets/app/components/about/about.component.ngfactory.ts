/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './about.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_AboutComponent_Host:import0.RenderComponentType = (null as any);
class _View_AboutComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AboutComponent_0_4:import3.AboutComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AboutComponent_Host0,renderType_AboutComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-about',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AboutComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AboutComponent_0_4 = new import3.AboutComponent();
    this._appEl_0.initComponent(this._AboutComponent_0_4,[],compView_0);
    compView_0.create(this._AboutComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AboutComponent) && (0 === requestNodeIndex))) { return this._AboutComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AboutComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AboutComponent_Host === (null as any))) { (renderType_AboutComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_AboutComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AboutComponentNgFactory:import9.ComponentFactory<import3.AboutComponent> = new import9.ComponentFactory<import3.AboutComponent>('app-about',viewFactory_AboutComponent_Host0,import3.AboutComponent);
const styles_AboutComponent:any[] = [];
var renderType_AboutComponent:import0.RenderComponentType = (null as any);
class _View_AboutComponent0 extends import1.AppView<import3.AboutComponent> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AboutComponent0,renderType_AboutComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.context.introduction,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_AboutComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AboutComponent> {
  if ((renderType_AboutComponent === (null as any))) { (renderType_AboutComponent = viewUtils.createRenderComponentType('C:/Users/ahooshmand/Projects/MEAN/SmarGrid2/assets/app/components/about/about.component.ts class AboutComponent - inline template',0,import8.ViewEncapsulation.None,styles_AboutComponent,{})); }
  return new _View_AboutComponent0(viewUtils,parentInjector,declarationEl);
}