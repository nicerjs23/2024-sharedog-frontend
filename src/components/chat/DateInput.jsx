import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

// 달력 오른쪽에 표시할 아이콘 (svg, png 등)
import promiseSelect from '@assets/icons/promiseSelect.svg';

// (1) 인풋+아이콘 래퍼
const Wrapper = styled.div`
  position: relative;
  width: 120px; /* 인풋 전체 길이 */
`;

// (2) 실제 인풋 스타일
const StyledInput = styled.input`
  width: 100%;
  padding-right: 20px; /* 아이콘 자리 확보 */
  box-sizing: border-box;

  font-size: 0.625rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  color: #7c7f91; /* 글씨 색상 */
  border: none; /* 필요 시 border 추가 */
  outline: none; /* 포커스 시 outline 제거 */
  background-color: transparent;
  text-align: right;
  &::placeholder {
    font-family: ${({ theme }) =>
      theme.fonts.SUITMedium['font-family']};
    color: #7c7f91;
    font-size: 0.625rem;
  }
`;

// (3) 아이콘 스타일
const Icon = styled.img`
  width: 8px;
  height: auto;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

// (4) 커스텀 인풋 (forwardRef 필수)
const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
  <Wrapper onClick={onClick} ref={ref}>
    <StyledInput
      type="text"
      readOnly
      value={value}
      placeholder="날짜를 선택해 주세요."
    />
    <Icon src={promiseSelect} alt="selectIcon" />
  </Wrapper>
));

// (5) 최종 DatePicker 컴포넌트
function DateInput({ dateValue, onDateChange }) {
  // 부모에서 넘어온 문자열(dateValue)을 Date 객체로 변환
  const selectedDate = dateValue ? new Date(dateValue) : null;

  // react-datepicker에서 날짜를 선택하면 Date 객체가 넘어오므로,
  // 다시 'yyyy-mm-dd' 같은 문자열로 변환해서 부모로 전달
  const handleChange = (date) => {
    if (!date) {
      onDateChange('');
      return;
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formatted = `${year}-${month}-${day}`;
    onDateChange(formatted);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      customInput={<CustomDateInput />}
      dateFormat="yyyy-MM-dd"
      minDate={new Date()}
    />
  );
}

export default DateInput;
