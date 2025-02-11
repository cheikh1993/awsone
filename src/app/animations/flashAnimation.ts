import { animate, animation, sequence, style } from "@angular/animations";

export const flashAnimation = animation([
     sequence([
                animate('{{time}}', style({
                    'background-color': '{{colorFlash}}'
                })),
                animate('{{time}}', style({
                  'background-color': 'white'
                })),
              ]),
])

export const slideAnimation = animation([
    style({
        transform: 'translateX(-100%)',
        opacity: 0,
        'background-color': '{{colorFlash}}',
    }),
    animate('250ms ease-out', style({
        transform: 'translateX(0)',
        opacity: 1,
        'background-color': 'white',
    })),
])