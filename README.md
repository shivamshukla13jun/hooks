
A lightweight and flexible React hook for managing multi-step forms with easy navigation and state management.

## Installation

```bash
npm install react-hooks
```

or 

```bash
yarn add react-hooks
```

## Mult step Form Features

- 🚀 Simple and intuitive multi-step form management
- 🔄 Easy navigation between form steps
- ✅ Built-in first and last step detection
- 🌟 Typescript support
- 🎨 Framework agnostic (works with react-hook-form, formik, etc.)

## Usage

### Basic Example

```jsx
import UseMultiStepForm from '@yourusername/use-multi-step-form';
import React from 'react';

function MultiStepFormExample() {
  const steps = [
    () => <Step1 />,
    () => <Step2 />,
    () => <Step3 />
  ];

  const {
    handleBack,
    handleNext,
    step: StepComponent,
    isFirstStep,
    isLastStep
  } = UseMultiStepForm(steps);

  return (
    <div>
      <StepComponent />
      
      <div>
        <button 
          onClick={handleBack} 
          disabled={isFirstStep}
        >
          Previous
        </button>
        
        <button 
          onClick={handleNext} 
          disabled={isLastStep}
        >
          {isLastStep ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}
```

### With React Hook Form

```jsx
import UseMultiStepForm from '@yourusername/use-multi-step-form';
import { useForm } from 'react-hook-form';

function ComplexMultiStepForm() {
  const steps = [
    ({ register }) => (
      <div>
        <input {...register('name')} />
      </div>
    ),
    ({ register }) => (
      <div>
        <input {...register('email')} />
      </div>
    )
  ];

  const methods = useForm();
  const multiStepForm = UseMultiStepForm(steps);

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <multiStepForm.step 
        register={methods.register} 
      />
      {/* Navigation buttons */}
    </form>
  );
}
```

## API

### `UseMultiStepForm(steps)`

#### Parameters
- `steps`: An array of step components

#### Returns
- `handleBack()`: Navigate to previous step
- `handleNext()`: Navigate to next step
- `step`: Current step component
- `isFirstStep`: Boolean indicating first step
- `isLastStep`: Boolean indicating last step

## TypeScript Support

```typescript
type StepComponent = React.ComponentType<{
  register?: any;
  errors?: any;
}>;

declare function UseMultiStepForm(steps: StepComponent[]): {
  handleBack: () => void;
  handleNext: () => void;
  step: StepComponent;
  isFirstStep: boolean;
  isLastStep: boolean;
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# @Pagination

A highly customizable and responsive React pagination component with intelligent page number calculation.


## Features

- 🌟 Intelligent page number calculation
- 🎨 Fully customizable styles
- 📱 Responsive design
- 🔢 Configurable page limit
- ✅ TypeScript support

## Usage

### Basic Example

```jsx
import Pagination from '@yourusername/react-smart-pagination';
import React, { useState } from 'react';

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;

  return (
    <Pagination
      totalPages={totalPages}
      Page={currentPage}
      handlePageChange={setCurrentPage}
      limit={7}
    />
  );
}
```

### Advanced Configuration

```jsx
function AdvancedPaginationExample() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      totalPages={100}           // Total number of pages
      Page={page}                // Current page
      handlePageChange={setPage} // Page change handler
      limit={5}                  // Number of visible page buttons
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `totalPages` | `number` | `0` | Total number of pages |
| `Page` | `number` | `1` | Current active page |
| `handlePageChange` | `(page: number) => void` | `() => {}` | Callback when page changes |
| `limit` | `number` | `5` | Maximum visible page buttons |

## Customization

### Custom Styling

You can pass custom styles to override default styling:

```jsx
<Pagination
  totalPages={20}
  Page={currentPage}
  handlePageChange={setCurrentPage}
  styles={{
    button: {
      backgroundColor: 'purple',
      color: 'white'
    },
    activeButton: {
      backgroundColor: 'pink'
    }
  }}
/>
```

## TypeScript Support

```typescript
interface PaginationProps {
  totalPages: number;
  Page: number;
  handlePageChange: (page: number) => void;
  limit?: number;
  styles?: {
    button?: React.CSSProperties;
    activeButton?: React.CSSProperties;
  };
}

declare function Pagination(props: PaginationProps): JSX.Element;
```

## Performance

- Minimalistic design
- O(n) time complexity for page number calculation
- Lightweight and tree-shakable

## Contributing

Contributions are welcome! Please submit pull requests or open issues on our GitHub repository.

## License

MIT License

```

