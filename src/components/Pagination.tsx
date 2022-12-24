import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
  setIsSelected: Dispatch<SetStateAction<number>>;
  isSelected: number;
  setOffset: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  offset: number;
}
const pagination = [1, 2, 3, 4];

const Pagination: FC<Props> = (props) => {
  const { isSelected, setIsSelected, setLimit, setOffset, offset } = props;

  const selectPage = (pag: number) => {
    setIsSelected(pag);
    setOffset(pag * 5 - 5);
    setLimit(pag * 5);
  };

  const nextPage = () => {
    if (offset < 20 - 5) {
      setOffset((prev) => prev + 5);
      setLimit((prev) => prev + 5);
      setIsSelected((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (offset === 0) {
      return;
    } else {
      setOffset((prev) => prev - 5);
      setLimit((prev) => prev - 5);
      setIsSelected((prev) => prev - 1);
    }
  };

  return (
    <div className="pagination_box ">
      <div onClick={previousPage} className="pagination_box_element">
        <img src="./arrow.png" alt="anterior" />
      </div>
      {pagination.map((pag) => (
        <div
          onClick={() => selectPage(pag)}
          key={pag}
          className={
            isSelected === pag
              ? 'pagination_box_element_selected'
              : 'pagination_box_element'
          }
        >
          {pag}
        </div>
      ))}

      <div onClick={nextPage} className="pagination_box_element">
        <img
          className="pagination_box_arrow_right"
          src="./arrow.png"
          alt="siguiente"
        />
      </div>
    </div>
  );
};

export default Pagination;
