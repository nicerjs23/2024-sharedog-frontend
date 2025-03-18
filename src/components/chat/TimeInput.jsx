import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

// 시간 선택 오른쪽에 표시할 아이콘
import promiseSelect from '@assets/icons/promiseSelect.svg';

// (1) 인풋+아이콘 래퍼
const Wrapper = styled.div`
  position: relative;
  width: 120px; /* 인풋 전체 길이 (원하는 대로 조절) */
`;

// (2) 실제 인풋 스타일
const StyledInput = styled.input`
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;

  font-size: 0.625rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium['font-family']};
  color: #7c7f91;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: right; /* 오른쪽 정렬 */

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
const CustomTimeInput = forwardRef(({ value, onClick }, ref) => (
  <Wrapper onClick={onClick} ref={ref}>
    <StyledInput
      type="text"
      readOnly
      value={value}
      placeholder="시간을 선택해 주세요."
    />
    <Icon src={promiseSelect} alt="selectIcon" />
  </Wrapper>
));

/**
 * TimeInput
 * @param {string} timeValue - "HH:mm" 형태의 시간 문자열
 * @param {function} onTimeChange - 부모 컴포넌트에서 timeValue를 변경하는 콜백
 */
function TimeInput({ timeValue, onTimeChange }) {
  // timeValue("HH:mm") -> Date 객체 변환
  let selectedTime = null;
  if (timeValue) {
    const [hourStr, minuteStr] = timeValue.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (!isNaN(hour) && !isNaN(minute)) {
      const now = new Date();
      now.setHours(hour);
      now.setMinutes(minute);
      now.setSeconds(0);
      now.setMilliseconds(0);
      selectedTime = now;
    }
  }

  // DatePicker에서 시간을 선택하면, Date 객체로 넘어옴
  // => 다시 "HH:mm" 문자열로 변환해서 부모에게 전달
  const handleChange = (date) => {
    if (!date) {
      onTimeChange('');
      return;
    }
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    onTimeChange(`${hours}:${minutes}`);
  };

  return (
    <DatePicker
      selected={selectedTime}
      onChange={handleChange}
      showTimeSelect // 시간 선택 On
      showTimeSelectOnly // 날짜는 숨기고 시간만
      timeIntervals={30} // 30분 간격
      timeCaption="Time" // 팝업 상단 라벨
      dateFormat="HH:mm" // 24시간 표기
      customInput={<CustomTimeInput />}
    />
  );
}

export default TimeInput;
