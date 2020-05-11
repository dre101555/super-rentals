import { module, test } from 'qunit';
import { visit, currentURL,click} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'directs to rental page ');
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
  
  test('should link to contact information', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals.', async function(assert){
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length,3,'checks for the rentals')
  })
});
