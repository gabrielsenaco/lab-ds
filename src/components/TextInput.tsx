import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={
      clsx('flex items-center gap-3 py-4 h-12 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300 outline-none')
    }>
      { props.children}
    </div>
  )
}

TextInputRoot.displayName = "TextInput.Root"

export interface TextInputIconProps {
  children: ReactNode,
}

export function TextInputIcon({ children  }: TextInputIconProps) {
  
  return (
    <Slot
      className='w-6 h-6 text-gray-400'
    >
        { children }
    </Slot>
  );
}

TextInputIcon.displayName = "TextInput.Icon"

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
function TextInputInput(props : TextInputInputProps) {
  return (
    <input 
        {...props}
        className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none "
      />
  )
}

TextInputInput.displayName = "TextInput.Input"

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}