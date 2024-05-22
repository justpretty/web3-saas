import { useModel } from 'umi';

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    window.localStorage.setItem('bsin-microAppMount', '3');
  },
  // 应用 render 之前触发
  async mount(props) {},
  // 应用卸载之后触发
  async unmount(props) {
    window.localStorage.setItem('bsin-microAppMount', '2');
  },
};

// 向子应用传递参数
export const useQiankunStateForSlave = () => {
  let data = useModel('@@qiankunStateFromMaster');
  let appId = data?.appId;
  return {
    appId,
  };
};
