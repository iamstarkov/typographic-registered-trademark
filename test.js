import registeredTrademark from './index';
import { equal, notEqual } from 'assert';

it('should fix typewriter’s registered registeredTrademark', ()=> {
  equal(registeredTrademark(`2013 MegaCorp (R)`), `2013 MegaCorp ®`);
});
