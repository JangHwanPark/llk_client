import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 모달 팝업 컴포넌트
 * @param {boolean} isOpen - 모달이 열려있는지 여부를 나타냄
 * @param {function} onClose - 모달을 닫는 함수
 * @param {React.ReactNode} children - 모달 팝업에 들어갈 내용
 */
export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  // 모달 요소에 대한 참조 생성
  const modalRef = useRef<HTMLDivElement>(null);
  console.log(modalRef);

  /**
   * 모달이 열릴때 모달 요소에 포커스를 설정한다.
   * isOpen 상태가 변경될 때 마다 useEffect 가 실행됨.
   */
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  // 모달창이 닫혀있다면 null 을 반환하여 모달을 랜더링하지 않음
  if (!isOpen) return null;

  return (
    <div>
      {/* tabIndex : 모달 오픈시 내부에서 바로 포커스를 받을 수 있도록 함 */}
      <div ref={modalRef} tabIndex={-1}>
        {children}
      </div>
      <div>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};
