import App from '../../App.vue';
import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
  it('renders the main component', async () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders SteppyComponent', async () => {
    const wrapper = shallowMount(App);
    const steppyComponent = wrapper.findComponent({ name: 'SteppyComponent' });
    expect(steppyComponent.exists()).toBe(true);
  });

  it('renders FormatoComponent initially', async () => {
    const wrapper = shallowMount(App);
    const formatoComponent = wrapper.findComponent({ name: 'FormatoComponent' });
    expect(formatoComponent.exists()).toBe(true);
  });

  it('does not render QuestionarioComponent initially', async () => {
    const wrapper = shallowMount(App);
    const questionarioComponent = wrapper.findComponent({ name: 'QuestionarioComponent' });
    expect(questionarioComponent.exists()).toBe(false);
  });

  it('does not render PagamentoComponent initially', async () => {
    const wrapper = shallowMount(App);
    const pagamentoComponent = wrapper.findComponent({ name: 'PagamentoComponent' });
    expect(pagamentoComponent.exists()).toBe(false);
  });

  it('does not render TorneioConponent initially', async () => {
    const wrapper = shallowMount(App);
    const torneioConponent = wrapper.findComponent({ name: 'TorneioConponent' });
    expect(torneioConponent.exists()).toBe(false);
  });
});