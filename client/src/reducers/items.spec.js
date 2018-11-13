import { items } from './items';
import { expect } from 'chai';

describe('items reducer', () => {

    describe('ADD_ITEM action', () => {

        it('adds an item to an empty state', () => {
            const stateBefore = [];
            const stateAfter = items(stateBefore, {
                type: 'ADD_ITEM',
                value: 'This is a test',
                id: 0
            });
            expect(stateAfter).to.deep.equal([
                { value: 'This is a test', id: 0 }
            ]);
        });

        it('adds an item to a non-empty state', () => {
            const stateBefore = [{
                value: 'This is a test', id: 0
            }];
            const stateAfter = items(stateBefore, {
                type: 'ADD_ITEM',
                value: 'Blueberry',
                id: 1
            });
            expect(stateAfter).to.deep.equal([
                { value: 'This is a test', id: 0 },
                { value: 'Blueberry', id: 1 }
            ]);
        });

    });

    describe('REMOVE_ITEM', () => {

        it('removes an item from a list', () => {
            const stateBefore = [
                { value: 'Blueberry', id: 0 },
                { value: 'Salmon', id: 1 }
            ];
            const stateAfter = items(stateBefore, {
                type: 'REMOVE_ITEM',
                id: 1
            });
            expect(stateAfter).to.deep.equal([
                { value: 'Blueberry', id: 0 }
            ]);
        });

    });

});