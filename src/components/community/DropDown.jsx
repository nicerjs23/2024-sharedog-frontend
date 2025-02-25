import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

import filterIcon from "@assets/icons/filterIcon.svg";

const DropDown = ({ options, selected, setSelected, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 드롭다운 외부 클릭 감지해서 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <HeaderText>{selected ? selected : label}</HeaderText>
        <img src={filterIcon} alt="필터아이콘" />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              isSelected={selected === option}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default DropDown;

const DropdownWrapper = styled.div`
  position: relative;
  width: 66px;
`;

const DropdownHeader = styled.div`
  display: flex;
  width: 100%;
  height: 29px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid #dadada;
  background: #fff;
  gap: 9px;
`;

const HeaderText = styled.div`
  color: #9c9ca1;
  font-size: 0.625rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITRegular["font-family"]};
`;
const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #dadada;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  z-index: 100;
`;

const DropdownItem = styled.li`
  padding: 12px 0;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  color: #2a2a2a;

  font-size: 0.75rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};

  &:hover {
    background-color: #ffe7e7;
    color: #ff6969;
    font-family: ${({ theme }) =>
      theme.fonts.SUITBold["font-family"]};
  }
`;
