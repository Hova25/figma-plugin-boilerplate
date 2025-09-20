/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./ui-src/**/*.{html,tsx}"],
	theme: {
		borderRadius: {
			0.5: "0.125rem", // 2px
			0.75: "0.188rem", // 3px
			1: "0.25rem", // 4px
			1.5: "0.375rem", // 6px
			2: "0.5rem", // 8px
			3: "0.75rem", // 12px
			4: "1rem", // 16px
			5: "1.25rem", // 20px
			6: "1.5rem", // 24px
			7: "1.75rem", // 28px
			8: "2rem", // 32px
			9: "2.25rem", // 36px
			10: "2.5rem", // 40px
		},
		extend: {
			fontSize: {
				"2xs": "0.688rem", // 11px
			},

			backgroundColor: {
				default: "var(--figma-color-bg)",
				menu: "var(--figma-color-bg-menu)",
				brand: {
					default: "var(--figma-color-bg-brand)",
					hover: "var(--figma-color-bg-brand-hover)",
					pressed: "var(--figma-color-bg-brand-pressed)",
					secondary: "var(--figma-color-bg-brand-secondary)",
					tertiary: "var(--figma-color-bg-brand-tertiary)",
				},
				component: {
					default: "var(--figma-color-bg-component)",
					hover: "var(--figma-color-bg-component-hover)",
					pressed: "var(--figma-color-bg-component-pressed)",
					secondary: "var(--figma-color-bg-component-secondary)",
					tertiary: "var(--figma-color-bg-component-tertiary)",
				},
				danger: {
					default: "var(--figma-color-bg-danger)",
					hover: "var(--figma-color-bg-danger-hover)",
					pressed: "var(--figma-color-bg-danger-pressed)",
					secondary: "var(--figma-color-bg-danger-secondary)",
					tertiary: "var(--figma-color-bg-danger-tertiary)",
				},
				disabled: {
					default: "var(--figma-color-bg-disabled)",
					secondary: "var(--figma-color-bg-disabled-secondary)",
				},
				hover: "var(--figma-color-bg-hover)",
				inverse: "var(--figma-color-bg-inverse)",
				onselected: {
					default: "var(--figma-color-bg-onselected)",
					hover: "var(--figma-color-bg-onselected-hover)",
					pressed: "var(--figma-color-bg-onselected-pressed)",
				},
				pressed: "var(--figma-color-bg-pressed)",
				secondary: "var(--figma-color-bg-secondary)",
				selected: {
					default: "var(--figma-color-bg-selected)",
					hover: "var(--figma-color-bg-selected-hover)",
					pressed: "var(--figma-color-bg-selected-pressed)",
					secondary: "var(--figma-color-bg-selected-secondary)",
					strong: "var(--figma-color-bg-selected-strong)",
					tertiary: "var(--figma-color-bg-selected-tertiary)",
				},
				success: {
					default: "var(--figma-color-bg-success)",
					hover: "var(--figma-color-bg-success-hover)",
					pressed: "var(--figma-color-bg-success-pressed)",
					secondary: "var(--figma-color-bg-success-secondary)",
					tertiary: "var(--figma-color-bg-success-tertiary)",
				},
				tertiary: "var(--figma-color-bg-tertiary)",
				warning: {
					default: "var(--figma-color-bg-warning)",
					hover: "var(--figma-color-bg-warning-hover)",
					pressed: "var(--figma-color-bg-warning-pressed)",
					secondary: "var(--figma-color-bg-warning-secondary)",
					tertiary: "var(--figma-color-bg-warning-tertiary)",
				},
			},
			textColor: {
				default: "var(--figma-color-text)",
				menu: "var(--figma-color-text-menu)",
				brand: {
					default: "var(--figma-color-text-brand)",
					secondary: "var(--figma-color-text-brand-secondary)",
					tertiary: "var(--figma-color-text-brand-tertiary)",
				},
				component: {
					default: "var(--figma-color-text-component)",
					pressed: "var(--figma-color-text-component-pressed)",
					secondary: "var(--figma-color-text-component-secondary)",
					tertiary: "var(--figma-color-text-component-tertiary)",
				},
				danger: {
					default: "var(--figma-color-text-danger)",
					secondary: "var(--figma-color-text-danger-secondary)",
					tertiary: "var(--figma-color-text-danger-tertiary)",
				},
				disabled: "var(--figma-color-text-disabled)",
				hover: "var(--figma-color-text-hover)",
				onbrand: {
					default: "var(--figma-color-text-onbrand)",
					secondary: "var(--figma-color-text-onbrand-secondary)",
					tertiary: "var(--figma-color-text-onbrand-tertiary)",
				},
				oncomponent: {
					default: "var(--figma-color-text-oncomponent)",
					secondary: "var(--figma-color-text-oncomponent-secondary)",
					tertiary: "var(--figma-color-text-oncomponent-tertiary)",
				},
				ondanger: {
					default: "var(--figma-color-text-ondanger)",
					secondary: "var(--figma-color-text-ondanger-secondary)",
					tertiary: "var(--figma-color-text-ondanger-tertiary)",
				},
				ondisabled: "var(--figma-color-text-ondisabled)",
				oninverse: "var(--figma-color-text-oninverse)",
				onselected: {
					default: "var(--figma-color-text-onselected)",
					secondary: "var(--figma-color-text-onselected-secondary)",
					strong: "var(--figma-color-text-onselected-strong)",
					tertiary: "var(--figma-color-text-onselected-tertiary)",
				},
				onsuccess: {
					default: "var(--figma-color-text-onsuccess)",
					secondary: "var(--figma-color-text-onsuccess-secondary)",
					tertiary: "var(--figma-color-text-onsuccess-tertiary)",
				},
				onwarning: {
					default: "var(--figma-color-text-onwarning)",
					secondary: "var(--figma-color-text-onwarning-secondary)",
					tertiary: "var(--figma-color-text-onwarning-tertiary)",
				},
				secondary: {
					default: "var(--figma-color-text-secondary)",
					hover: "var(--figma-color-text-secondary-hover)",
				},
				selected: {
					default: "var(--figma-color-text-selected)",
					secondary: "var(--figma-color-text-selected-secondary)",
					tertiary: "var(--figma-color-text-selected-tertiary)",
				},
				success: {
					default: "var(--figma-color-text-success)",
					secondary: "var(--figma-color-text-success-secondary)",
					tertiary: "var(--figma-color-text-success-tertiary)",
				},
				tertiary: {
					default: "var(--figma-color-text-tertiary)",
					hover: "var(--figma-color-text-tertiary-hover)",
				},
				warning: {
					default: "var(--figma-color-text-warning)",
					secondary: "var(--figma-color-text-warning-secondary)",
					tertiary: "var(--figma-color-text-warning-tertiary)",
				},
				icon: {
					default: "var(--figma-color-icon)",
					brand: {
						// default: "var(--figma-color-icon-brand)",
						default: "var(--figma-color-bg-brand)",
						pressed: "var(--figma-color-icon-brand-pressed)",
						secondary: "var(--figma-color-icon-brand-secondary)",
						tertiary: "var(--figma-color-icon-brand-tertiary)",
					},
					component: {
						default: "var(--figma-color-icon-component)",
						pressed: "var(--figma-color-icon-component-pressed)",
						secondary: "var(--figma-color-icon-component-secondary)",
						tertiary: "var(--figma-color-icon-component-tertiary)",
					},
					danger: {
						default: "var(--figma-color-icon-danger)",
						hover: "var(--figma-color-icon-danger-hover)",
						pressed: "var(--figma-color-icon-danger-pressed)",
						secondary: {
							default: "var(--figma-color-icon-danger-secondary)",
							hover: "var(--figma-color-icon-danger-secondary-hover)",
						},
						tertiary: "var(--figma-color-icon-danger-tertiary)",
					},
					disabled: "var(--figma-color-icon-disabled)",
					hover: "var(--figma-color-icon-hover)",
					onbrand: {
						default: "var(--figma-color-icon-onbrand)",
						secondary: "var(--figma-color-icon-onbrand-secondary)",
						tertiary: "var(--figma-color-icon-onbrand-tertiary)",
					},
					oncomponent: {
						default: "var(--figma-color-icon-oncomponent)",
						secondary: "var(--figma-color-icon-oncomponent-secondary)",
						tertiary: "var(--figma-color-icon-oncomponent-tertiary)",
					},
					ondanger: {
						default: "var(--figma-color-icon-ondanger)",
						secondary: "var(--figma-color-icon-ondanger-secondary)",
						tertiary: "var(--figma-color-icon-ondanger-tertiary)",
					},
					ondisabled: "var(--figma-color-icon-ondisabled)",
					oninverse: "var(--figma-color-icon-oninverse)",
					onselected: {
						default: "var(--figma-color-icon-onselected)",
						secondary: "var(--figma-color-icon-onselected-secondary)",
						strong: "var(--figma-color-icon-onselected-strong)",
						tertiary: "var(--figma-color-icon-onselected-tertiary)",
					},
					onsuccess: {
						default: "var(--figma-color-icon-onsuccess)",
						secondary: "var(--figma-color-icon-onsuccess-secondary)",
						tertiary: "var(--figma-color-icon-onsuccess-tertiary)",
					},
					onwarning: {
						default: "var(--figma-color-icon-onwarning)",
						secondary: "var(--figma-color-icon-onwarning-secondary)",
						tertiary: "var(--figma-color-icon-onwarning-tertiary)",
					},
					pressed: "var(--figma-color-icon-pressed)",
					secondary: {
						default: "var(--figma-color-icon-secondary)",
						hover: "var(--figma-color-icon-secondary-hover)",
					},
					selected: {
						default: "var(--figma-color-icon-selected)",
						secondary: "var(--figma-color-icon-selected-secondary)",
						tertiary: "var(--figma-color-icon-selected-tertiary)",
					},
					success: {
						default: "var(--figma-color-icon-success)",
						pressed: "var(--figma-color-icon-success-pressed)",
						secondary: "var(--figma-color-icon-success-secondary)",
						tertiary: "var(--figma-color-icon-success-tertiary)",
					},
					tertiary: {
						default: "var(--figma-color-icon-tertiary)",
						hover: "var(--figma-color-icon-tertiary-hover)",
					},
					warning: {
						default: "var(--figma-color-icon-warning)",
						pressed: "var(--figma-color-icon-warning-pressed)",
						secondary: "var(--figma-color-icon-warning-secondary)",
						tertiary: "var(--figma-color-icon-warning-tertiary)",
					},
				},
			},
			borderColor: {
				default: "var(--figma-color-border)",
				brand: {
					default: "var(--figma-color-border-brand)",
					strong: "var(--figma-color-border-brand-strong)",
				},
				component: {
					default: "var(--figma-color-border-component)",
					hover: "var(--figma-color-border-component-hover)",
					strong: "var(--figma-color-border-component-strong)",
				},
				danger: {
					default: "var(--figma-color-border-danger)",
					strong: "var(--figma-color-border-danger-strong)",
				},
				disabled: {
					default: "var(--figma-color-border-disabled)",
					strong: "var(--figma-color-border-disabled-strong)",
				},
				onbrand: {
					default: "var(--figma-color-border-onbrand)",
					strong: "var(--figma-color-border-onbrand-strong)",
				},
				oncomponent: {
					default: "var(--figma-color-border-oncomponent)",
					strong: "var(--figma-color-border-oncomponent-strong)",
				},
				ondanger: {
					default: "var(--figma-color-border-ondanger)",
					strong: "var(--figma-color-border-ondanger-strong)",
				},
				onselected: {
					default: "var(--figma-color-border-onselected)",
					strong: "var(--figma-color-border-onselected-strong)",
				},
				onsuccess: {
					default: "var(--figma-color-border-onsuccess)",
					strong: "var(--figma-color-border-onsuccess-strong)",
				},
				onwarning: {
					default: "var(--figma-color-border-onwarning)",
					strong: "var(--figma-color-border-onwarning-strong)",
				},
				selected: {
					default: "var(--figma-color-border-selected)",
					strong: "var(--figma-color-border-selected-strong)",
				},
				strong: "var(--figma-color-border-strong)",
				success: {
					default: "var(--figma-color-border-success)",
					strong: "var(--figma-color-border-success-strong)",
				},
				warning: {
					default: "var(--figma-color-border-warning)",
					strong: "var(--figma-color-border-warning-strong)",
				},
			},
		},
	},
	plugins: [],
};
