import React from 'react';
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
export declare const Modal: React.FC<React.PropsWithChildren<ModalProps>>;
export {};
