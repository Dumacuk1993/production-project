import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('SomeClass')).toBe('SomeClass');
    });
    test('with additional class', () => {
        const expected = 'SomeClass class1 class2';
        expect(classNames('SomeClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods', () => {
        const expected = 'SomeClass class1 class2 hovered scrollable';
        expect(classNames('SomeClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'SomeClass class1 class2 hovered';
        expect(classNames('SomeClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'SomeClass class1 class2 hovered';
        expect(classNames(
            'SomeClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
