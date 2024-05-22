// 延时关闭
export const $delayCloseModal = (val: any, time?: number, isOpen?: boolean) => {
  // 是否打开
  const $openModal = () => {
    if (isOpen) {
      val(true);
    }
  };
  // 延时三秒关闭
  const $closeModal = () => {
    setTimeout(
      () => {
        val(false);
      },
      (time || 3) * 1000,
      $openModal(),
    );
  };
  // 判断是否为函数
  if (Object.prototype.toString.call(val) === '[object Function]') {
    $closeModal();
  }
};
