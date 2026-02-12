# 🔧 Utility Libraries - clsx & tailwind-merge

These two small but powerful libraries make working with Tailwind CSS much easier.

---

## clsx - Conditional Class Names

**Purpose:** Easily combine conditional class names

**Install:** Already in package.json (`clsx`)

**NPM:** https://www.npmjs.com/package/clsx

### Basic Usage

```tsx
import { clsx } from 'clsx'

// Combine classes conditionally
const buttonClass = clsx(
  'px-4 py-2 rounded font-medium',
  isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900',
  isDisabled && 'opacity-50 cursor-not-allowed'
)

// Result:
// "px-4 py-2 rounded font-medium bg-blue-500 text-white"
// or
// "px-4 py-2 rounded font-medium bg-gray-200 text-gray-900"
// or
// "px-4 py-2 rounded font-medium bg-blue-500 text-white opacity-50 cursor-not-allowed"
```

### Common Patterns

#### Button States
```tsx
<button
  className={clsx(
    'px-4 py-2 rounded transition-colors',
    isLoading && 'opacity-50 cursor-not-allowed',
    !isLoading && 'hover:bg-blue-600',
    variant === 'primary' && 'bg-blue-500 text-white',
    variant === 'secondary' && 'bg-gray-200 text-gray-900',
    size === 'sm' && 'px-2 py-1 text-sm',
    size === 'lg' && 'px-6 py-3 text-lg'
  )}
  disabled={isLoading}
>
  {isLoading ? 'Loading...' : 'Submit'}
</button>
```

#### Conditional Card Styling
```tsx
const cardClass = clsx(
  'rounded-lg p-6 border',
  isPremium ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-white',
  hasError && 'border-red-500',
  'shadow-md hover:shadow-lg transition-shadow'
)
```

#### Responsive Classes
```tsx
<div
  className={clsx(
    'grid gap-4',
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    !isVisible && 'hidden'
  )}
>
```

### With Objects (Alternative)

```tsx
import { clsx } from 'clsx'

const buttonClass = clsx({
  'px-4 py-2 rounded': true,           // Always applied
  'bg-blue-500 text-white': isActive,  // If active
  'bg-gray-200 text-gray-900': !isActive,
  'opacity-50': isDisabled,
  'cursor-not-allowed': isDisabled
})
```

---

## tailwind-merge - Resolve Class Conflicts

**Purpose:** Merge Tailwind classes without conflicts

**Install:** Already in package.json (`tailwind-merge`)

**NPM:** https://www.npmjs.com/package/tailwind-merge

### Problem: Class Conflicts

```tsx
// ❌ WITHOUT tailwind-merge - PROBLEM:
// If you pass 'px-8' but component has 'px-4',
// CSS specificity means 'px-4' wins (last one always loses!)
<Button className="px-8">Wide Button</Button>

// Component default:
className="px-4 py-2 bg-blue-500"

// Result: px-4 wins (wrong!)
```

### Solution: tailwind-merge

```tsx
import { twMerge } from 'tailwind-merge'

// ✅ WITH tailwind-merge - WORKS:
function Button({ className, ...props }) {
  return (
    <button
      className={twMerge(
        'px-4 py-2 rounded bg-blue-500 text-white',
        className  // Override defaults
      )}
      {...props}
    />
  )
}

// Usage:
<Button className="px-8">Wide Button</Button>

// Result: px-8 wins (correct!)
// "px-8 py-2 rounded bg-blue-500 text-white"
```

### Real-World Example: Flexible Card Component

```tsx
import { twMerge } from 'tailwind-merge'

export function Card({ children, className, ...props }) {
  return (
    <div
      className={twMerge(
        // Default styles
        'rounded-lg border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow',
        // User can override
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Users can customize:
<Card className="bg-blue-50 border-blue-300">
  Custom card
</Card>

// Fully resolves to:
// "rounded-lg border-blue-300 p-6 bg-blue-50 shadow-sm hover:shadow-md transition-shadow"
```

---

## Using Both Together

### Perfect Combination

```tsx
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function Button({
  variant = 'primary',
  size = 'md',
  isLoading,
  className,
  ...props
}) {
  return (
    <button
      className={twMerge(
        // Base styles
        'font-medium rounded transition-colors',

        // Conditional styles with clsx
        clsx(
          variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
          variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
          size === 'sm' && 'px-3 py-1 text-sm',
          size === 'md' && 'px-4 py-2',
          size === 'lg' && 'px-6 py-3 text-lg',
          isLoading && 'opacity-50 cursor-not-allowed'
        ),

        // User overrides
        className
      )}
      disabled={isLoading}
      {...props}
    />
  )
}

// Use:
<Button variant="primary" size="lg" className="w-full">
  Submit
</Button>
```

---

## Common Patterns

### Reusable Component with Flexibility

```tsx
export function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={twMerge(
        'inline-block px-3 py-1 rounded-full font-semibold text-sm',
        clsx(
          variant === 'default' && 'bg-gray-100 text-gray-900',
          variant === 'success' && 'bg-green-100 text-green-900',
          variant === 'warning' && 'bg-yellow-100 text-yellow-900',
          variant === 'error' && 'bg-red-100 text-red-900'
        ),
        className
      )}
    >
      {children}
    </span>
  )
}
```

### Form Field Error States

```tsx
export function FormField({ error, value, ...props }) {
  return (
    <div>
      <input
        className={twMerge(
          'w-full px-4 py-2 border rounded',
          clsx(
            error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
          )
        )}
        value={value}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
```

---

## Tips & Tricks

### 1. Order Matters with clsx

```tsx
// Good: More specific first
clsx(
  'base classes',
  variant === 'special' && 'special-override-classes',
  'more-base-classes'
)
```

### 2. Use with Dynamic Arrays

```tsx
const classNames = clsx(
  'base',
  isActive && 'active',
  ['array', 'of', 'classes'],
  { object: true, based: false, classes: true }
)
```

### 3. Don't Over-Use

```tsx
// ❌ Too complex
className={twMerge(clsx(clsx(clsx(...))))}

// ✅ Keep it simple
className={twMerge('base classes', conditional && 'extra', userClass)}
```

---

**Last Updated:** February 11, 2026
