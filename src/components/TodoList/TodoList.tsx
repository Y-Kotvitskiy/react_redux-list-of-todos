/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { RootState } from '../../app/store';

export const TodoList: React.FC = () => {

  const useAppSelector = useSelector.withTypes<RootState>();
  const todos = useAppSelector(state => state.todos);
  const currentId = 2;

  return (
    <>{todos.length === 0 && <p className="notification is-warning">
      There are no todos matching current filter criteria
    </p>
    }

      <table className="table is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>#</th>

            <th>
              <span className="icon">
                <i className="fas fa-check" />
              </span>
            </th>

            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {todos.map(({ id, completed, title }) => (
            <tr
              key={id}
              data-cy="todo"
              className={currentId === id ? 'has-background-info-light' : ''}
            >
              <td className="is-vcentered">{id}</td>
              <td className="is-vcentered">
                {completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>

              <td className="is-vcentered is-expanded">
                <p className="has-text-danger">{title}</p>
              </td>

              <td className="has-text-right is-vcentered">
                <button data-cy="selectButton" className="button" type="button">
                  <span className="icon">
                    <i className={cn("far", {
                      'fa-eye': currentId !== id,
                      'fa-eye-slash': currentId == id,
                    })} />
                  </span>
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  );
};
