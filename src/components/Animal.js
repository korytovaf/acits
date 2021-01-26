import React from "react";

const Animal = ({animal}) => {
  const today = new Date().getFullYear();
  const birthday = new Date(animal.birth_date).getFullYear();
  const age = today - birthday;

  return (
    <div className="modal-body">
      <div className="mb-1">
        <span>Кличка - </span>
        <span>
          {animal.name
            ? animal.name
            : "неизвестна"
          }
        </span>
      </div>
      <div className="mb-1">
        <span>Животное - </span>
        <span>
          {animal.spec_parent_name
            ? animal.spec_parent_name
            : "неизвестно"
          }
        </span>
      </div>
      <div className="mb-1">
        <span>Порода - </span>
        <span>
          {animal.spec_name
            ? animal.spec_name
            : "неизвестна"
          }
        </span>
      </div>
      <div className="mb-1">
        <span>Среда обитания - </span>
        <span>
          {animal.spec_category_name
            ? animal.spec_category_name
            : "неизвестна"
          }
        </span>
      </div>
      <div className="mb-1">
        <span>Возраст - </span>
        <span>
          {animal.birth_date
            ? age
            : "неизвестен"
          }
        </span>
      </div>
    </div>
  );
}

export default Animal
