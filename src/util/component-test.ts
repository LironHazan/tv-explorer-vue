import Vue, { Component } from 'vue';
import merge from 'lodash.merge';

export interface IComponents {
  [key: string]: Component;
}

export class ComponentTest {

  public vm: Vue;

  constructor (private template: string, private components: IComponents) {
  }

  public createComponent (createOptions?: any): void {
    let options = {
      template: this.template,
      components: this.components
    }
    if (createOptions) merge(options, createOptions);
    this.vm = new Vue(options).$mount();
  }

  public async execute (callback: (vm: Vue) => Promise<void> | void): Promise<void> {
    await Vue.nextTick();
    await callback(this.vm);
  }

}
