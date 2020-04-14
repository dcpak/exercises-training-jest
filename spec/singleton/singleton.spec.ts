import { Singleton } from './singleton-oop';
import { produceSingleton } from './singleton-fp'

// Behavior DD
describe('Singleton', () => {
  describe('OOP', () => {

    // przy OOP testy BĘDA SIĘ WYWALAŁY
    beforeEach(() => {
      let i: Singleton = null
    })

    it('should create at most one instance', () => {
      // START
      const i1 = Singleton.getInstance();
      const i2 = Singleton.getInstance();
      const i3 = Singleton.getInstance();

      expect(i1).toBe(i2);
      expect(i1).toBe(i3);
      expect(i2).toBe(i3);
    });

    xit('should have different value after change', () => {
      // START
      const i1 = Singleton.getInstance();
      i1.value = "different"

      expect(i1.value).toBe("different");
    });

    it('should have value=initial', () => {
      // START
      const i1 = Singleton.getInstance();

      expect(i1.value).toBe("initial");
    });

    it('should create an instance', () => {
      // START
      const i1 = Singleton.getInstance();

      expect(i1.doSomeStuff()).toBeUndefined();
    });
  });

  describe('FP', () => {

    let Singleton
    beforeEach(() => {
      Singleton = produceSingleton()
    })

    it('should create at most one instance', () => {
      // START
      const i1 = Singleton.getInstance();
      const i2 = Singleton.getInstance();
      const i3 = Singleton.getInstance();

      expect(i1).toBe(i2);
      expect(i1).toBe(i3);
      expect(i2).toBe(i3);
    });

    it('should have different value after change', () => {
      // START
      const i1 = Singleton.getInstance();
      i1.value = "different"

      expect(i1.value).toBe("different");
    });

    it('should have value=initial', () => {
      // START
      const i1 = Singleton.getInstance();

      expect(i1.value).toBe("initial");
    });

    it('should create an instance', () => {
      // START
      const i1 = Singleton.getInstance();

      expect(i1.doSomeStuff()).toBeUndefined();
    });
  });
});
