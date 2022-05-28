import {getEnharmonicEquivalent} from './helpers';
getEnharmonicEquivalent('C#');

describe('getEnharmonicEquivalent', () => (
    it('should return the enharmonic equivalent of a note', () => {
        expect(getEnharmonicEquivalent('C#')).toBe('Db');
    }
)))