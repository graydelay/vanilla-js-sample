export default class Component {
  $target;
  state;

  constructor ($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() { };

  template() { return ''; }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent(); // 없을 경우 이벤트가 안달림..
  }

  setEvent() {};

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
