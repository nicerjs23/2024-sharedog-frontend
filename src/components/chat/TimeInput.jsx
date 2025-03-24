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

  /* ★ 비활성화 시 스타일 (원하시는 대로 조절) */
  &:disabled {
    color: #c0c0c0; /* 회색 텍스트 */
    cursor: not-allowed;
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
const CustomTimeInput = forwardRef(
  ({ value, onClick, disabled }, ref) => (
    <Wrapper onClick={onClick} ref={ref}>
      <StyledInput
        type="text"
        readOnly
        value={value}
        placeholder="시간을 선택해 주세요."
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
      />
      <Icon src={promiseSelect} alt="selectIcon" />
    </Wrapper>
  )
);

/**
 * TimeInput
 * @param {string} timeValue - "HH:mm" 형태의 시간 문자열
 * @param {function} onTimeChange - 부모 컴포넌트에서 timeValue를 변경하는 콜백
 */
function TimeInput({ timeValue, onTimeChange, dateValue }) {
  // timeValue("HH:mm") -> Date 객체로 변환
  let selectedTime = null;
  if (timeValue) {
    const [hourStr, minuteStr] = timeValue.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    if (!isNaN(hour) && !isNaN(minute)) {
      const now = new Date();
      now.setHours(hour, minute, 0, 0);
      selectedTime = now;
    }
  }

  // 오늘 날짜인지 판별
  const todayStr = new Date().toISOString().split('T')[0];
  const isToday = dateValue === todayStr;

  // ★ 오늘이면 minTime=현재시각, maxTime=23:59
  //    오늘이 아니면 minTime/maxTime 아예 전달하지 않음
  let extraProps = {};
  if (isToday) {
    // minTime: 현재 시각
    const minTimeDate = new Date();
    minTimeDate.setSeconds(0, 0);

    // maxTime: 오늘 23:59
    const maxTimeDate = new Date();
    maxTimeDate.setHours(23, 59, 59, 999);

    extraProps = {
      minTime: minTimeDate,
      maxTime: maxTimeDate,
    };
  }

  // react-datepicker에서 시간 선택 → "HH:mm"으로 변환
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
      disabled={!dateValue}
      customInput={<CustomTimeInput disabled={!dateValue} />}
      // ★ 오늘인 경우에만 minTime/maxTime 지정
      {...extraProps}
    />
  );
}

export default TimeInput;
