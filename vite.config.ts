import { resolve } from 'path'

export default {
    base: '/JavaScript/',
    build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        index: resolve(__dirname, 'index.html'),
        // @ts-ignore
        dzm1w1: resolve(__dirname, 'JS_DZ_Modul_1_Week_1.html'),
        // @ts-ignore
        dzm1w2: resolve(__dirname, 'JS_DZ_Modul_1_Week_2.html'),     
        // @ts-ignore
        dzm1w3: resolve(__dirname, 'JS_DZ_Modul_1_Week_3.html'),
        // @ts-ignore
        dzm2w1: resolve(__dirname, 'JS_DZ_Modul_2_Week_1.html'),
        // @ts-ignore
        dzm2w3: resolve(__dirname, 'JS_DZ_Modul_2_Week_3.html'),
        // @ts-ignore
        dzExtra: resolve(__dirname, 'JS_DZ_Modul_extra_task.html'),
        // @ts-ignore
        pzm1w1: resolve(__dirname, 'JS_PZ_Modul_1_Week_1.html'),
        // @ts-ignore
        pzm1w2: resolve(__dirname, 'JS_PZ_Modul_1_Week_2.html'),
        // @ts-ignore
        pzm1w3: resolve(__dirname, 'JS_PZ_Modul_1_Week_3.html'),
        // @ts-ignore
        pzm1w4: resolve(__dirname, 'JS_PZ_Modul_1_Week_4.html'),
        // @ts-ignore
        pzm1w5: resolve(__dirname, 'JS_PZ_Modul_1_Week_5.html'),
        // @ts-ignore
        pzm2w2: resolve(__dirname, 'JS_PZ_Modul_2_Week_2.html'),
        // @ts-ignore
        pzm2w3: resolve(__dirname, 'JS_PZ_Modul_2_Week_3.html'),
        // @ts-ignore
        pzExtra1: resolve(__dirname, 'JS_PZ_Modul_extra_task.html'),
        // @ts-ignore
        pzExtra2: resolve(__dirname, 'JS_PZ_Modul_extra_task2.html'),
        
      }
    }
  }
}