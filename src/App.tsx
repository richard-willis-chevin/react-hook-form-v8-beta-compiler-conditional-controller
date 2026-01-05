import { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import * as v from 'valibot';

const schema = v.object({
  toggle: v.boolean(),
  conditionalField: v.nullable(v.string()),
});

type FormFields = v.InferOutput<typeof schema>;

export default function BugRepro() {
  const form = useForm<FormFields>({
    resolver: valibotResolver(schema),
    defaultValues: {
      toggle: false,
      conditionalField: null,
    },
  });

  const [showConditional, setShowConditional] = useState(false);

  return (
    <FormProvider {...form}>
      <div style={{ padding: '20px' }}>
        <button onClick={() => setShowConditional(!showConditional)}>
          Toggle Conditional Field
        </button>

        {showConditional && (
          <Controller
            control={form.control}
            name="conditionalField"
            render={({ field }) => (
              <div>
                <label>Conditional Field </label>
              </div>
            )}
          />
        )}
      </div>
    </FormProvider>
  );
}
