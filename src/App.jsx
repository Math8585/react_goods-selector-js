import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const checkIsGoodSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={
                  checkIsGoodSelected ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    onClick={() => {
                      if (checkIsGoodSelected) {
                        setSelectedGood(null);

                        return;
                      }

                      setSelectedGood(good);
                    }}
                    data-cy={checkIsGoodSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={
                      checkIsGoodSelected ? 'button is-info' : 'button'
                    }
                  >
                    {checkIsGoodSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
