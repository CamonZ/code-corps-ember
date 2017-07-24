import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import PageObject from 'ember-cli-page-object';
import githubRepoComponent from 'code-corps-ember/tests/pages/components/github-repo';

let page = PageObject.create(githubRepoComponent);

const {
  set
} = Ember;

function setHandlers(context, { connectHandler = function() {}, removeHandler = function() {} } = {}) {
  set(context, 'connectHandler', connectHandler);
  set(context, 'removeHandler', removeHandler);
}

function renderPage() {
  page.render(hbs`
    {{github-repo
      connect=(action connectHandler)
      isConnected=isConnected
      name=name
      remove=(action removeHandler)
    }}
  `);
}

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true,
  beforeEach() {
    setHandlers(this);
    page.setContext(this);
  },
  afterEach() {
    page.removeContext();
  }
});

test('it renders the name', function(assert) {
  assert.expect(1);
  let name = "code-corps-ember";
  set(this, 'name', name);
  renderPage();
  assert.equal(page.name.text, name);
});

test('it renders correctly when not connected', function(assert) {
  assert.expect(2);
  set(this, 'isConnected', false);
  renderPage();
  assert.ok(page.connectButton.isVisible);
  assert.notOk(page.isConnected);
});

test('it renders correctly when connected', function(assert) {
  assert.expect(2);
  set(this, 'isConnected', true);
  renderPage();
  assert.ok(page.removeLink.isVisible);
  assert.ok(page.isConnected);
});

test('it sends the connect action when the button is clicked', function(assert) {
  assert.expect(1);
  set(this, 'isConnected', false);
  set(this, 'connectHandler', function() {
    assert.ok(true);
  });
  renderPage();
  page.connectButton.click();
});

test('it sends the remove action when the link is clicked', function(assert) {
  assert.expect(1);
  set(this, 'isConnected', true);
  set(this, 'removeHandler', function() {
    assert.ok(true);
  });
  renderPage();
  page.removeLink.click();
});
