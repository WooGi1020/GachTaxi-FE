// 상수 키워드 추가 시 export 해주기

// 상수 형태로 관리할 value들은 여기서 추가하면서 사용하기
const AGREE_VALUES = [
  {
    name: 'termsAgreement',
    label: '이용 약관 동의(필수)',
  },
  {
    name: 'privacyAgreement',
    label: '개인정보 수집 및 이용 동의(필수)',
  },
  {
    name: 'marketingAgreement',
    label: '광고성 정보 수신 동의(선택)',
  },
] as const;

export const OFFSET_THRESHOLD = 30;
export const DELTA_THRESHOLD = 5;

export { AGREE_VALUES };

export const ORIGIN = '127.12692157601926,37.45052385846493';
export const DESTINATION = '127.13467190126833,37.45543030528147';
