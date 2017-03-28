import { moduleFor, test } from 'ember-qunit';

moduleFor('route:project/checkout', 'Unit | Route | project/checkout', {
  // Specify the other units that are required for this test.
  needs: [
    'service:metrics',
    'service:flash-messages',
    'service:session',
    'service:user-subscriptions'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
