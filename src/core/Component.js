export default class Component {
  $target;
  props; // 부모 컴포넌트가 자식 컴포넌트에게 상태 혹은 메소드를 넘겨주기 위함
  state;

  constructor ($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup () { };

  mounted () { }; // render 이후에 추가적인 기능 수행

  template () { return ''; }

  render () {
    this.$target.innerHTML = this.template();
    this.mounted(); // render 후에 mounted가 실행
  }

  setEvent () {};

  setState (newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  } // setState -> render -> mounted

  addEvent (eventType, selector, callback) {
    const children = [ ...this.$target.querySelectorAll(selector) ];

    this.$target.addEventListener(eventType, event => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    })
  }
}
