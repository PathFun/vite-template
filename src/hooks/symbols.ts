import { FormInstance, FRPropsCtx } from '../types';
type PropsCtxInstance = Partial<FRPropsCtx>;

export const FORM_PROVIDE_KEY: InjectionKey<FormInstance> = Symbol();
export const PROPS_PROVIDE_KEY: InjectionKey<ComputedRef<PropsCtxInstance>> = Symbol();
