import classNames from 'classnames';
import { BsDashLg, BsMusicNoteBeamed } from 'react-icons/bs';

export default function MediaItemCheckbox({
  index,
  indexChart,
  checkbox,
  isMusicIcon,
  checked,
  handleChecked,
}) {
  const classNameIndex = classNames('media-left__order', {
    'outline--blue': index === 0,
    'outline--green': index === 1,
    'outline--red': index === 2,
    'outline--text': index > 2,
  });

  return (
    <>
      {indexChart && (
        <div className="media-left__index">
          <h2 className={classNameIndex}>{index + 1}</h2>
          <BsDashLg className="media-left__separator" />
        </div>
      )}
      {(checkbox || isMusicIcon) && (
        <div className="media-left__box">
          {checkbox && (
            <div className="media-checkbox">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="media-checkbox__input"
                checked={checked}
                onChange={handleChecked}
              />
              <label className="media-checkbox__label" htmlFor={`checkbox-${index}`} />
            </div>
          )}
          {isMusicIcon && <BsMusicNoteBeamed className="media-left__music" />}
        </div>
      )}
    </>
  );
}
