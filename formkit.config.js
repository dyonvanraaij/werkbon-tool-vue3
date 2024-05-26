import '@formkit/themes/genesis';
import '@formkit/pro/genesis';

import { en, nl } from '@formkit/i18n';
import { createProPlugin, inputs } from '@formkit/pro';
import { defaultConfig } from '@formkit/vue';


const proPlugin = createProPlugin('fk-5c9752ddd0c', inputs);

const FormKitOptions = defaultConfig({
    plugins: [proPlugin],
    locales: { nl, en },
    locale: 'nl',
});
export default FormKitOptions;