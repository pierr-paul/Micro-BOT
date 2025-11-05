/**
 * Blocs de contrôle pour le robot Micro'BOT.
 */
//% color=#000000 icon="\uf013" weight=0
//% block="Micro'BOT"
namespace MicroBOT {
    const moteurGaucheAvant = AnalogPin.P13;
    const moteurGaucheArriere = AnalogPin.P14;
    const moteurDroitArriere = AnalogPin.P15;
    const moteurDroitAvant = AnalogPin.P16;
    const brocheCapteurGauche = DigitalPin.P0;
    const brocheCapteurDroit = DigitalPin.P2;
    const brocheTrig = DigitalPin.P1;
    const brocheEcho = DigitalPin.P8;

    function _moteurs(vitesse_gauche: number, vitesse_droite: number): void {
        let vg = Math.max(-100, Math.min(100, vitesse_gauche));
        let vd = Math.max(-100, Math.min(100, vitesse_droite));

        if (vg > 0) {
            pins.analogWritePin(moteurGaucheAvant, Math.round(vg * 2.55));
            pins.analogWritePin(moteurGaucheArriere, 0);
        } else {
            pins.analogWritePin(moteurGaucheAvant, 0);
            pins.analogWritePin(moteurGaucheArriere, Math.round(Math.abs(vg) * 2.55));
        }

        if (vd > 0) {
            pins.analogWritePin(moteurDroitAvant, Math.round(vd * 2.55));
            pins.analogWritePin(moteurDroitArriere, 0);
        } else {
            pins.analogWritePin(moteurDroitAvant, 0);
            pins.analogWritePin(moteurDroitArriere, Math.round(Math.abs(vd) * 2.55));
        }
    }

    /**
     * Avancer : le robot avance en ligne droite avec la vitesse paramétrable de 0 à 100 %.
     */
    //% block="avancer $vitesse \\%"
    //% vitesse.min=0 vitesse.max=100 vitesse.defl=85
    //% weight=100
    export function avancer(vitesse: number): void {
        _moteurs(vitesse, vitesse);
    }

    /**
     * Reculer : le robot recule en ligne droite avec la vitesse paramétrable de 0 à 100 %.
     */
    //% block="reculer $vitesse \\%"
    //% vitesse.min=0 vitesse.max=100 vitesse.defl=65
    //% weight=90
    export function reculer(vitesse: number): void {
        _moteurs(-vitesse, -vitesse);
    }

    /**
     * Tourner à gauche : le robot tourne vers la gauche avec la vitesse du moteur droit paramétrable de 0 à 100 %.
     */
    //% block="tourner à gauche $vitesse_gauche \\%"
    //% vitesse_gauche.min=0 vitesse_gauche.max=100 vitesse_gauche.defl=75
    //% weight=80
    export function tourner_gauche(vitesse_gauche: number): void {
        _moteurs(vitesse_gauche, 0);
    }

    /**
     * Tourner à droite : le robot tourne vers la droite avec la vitesse du moteur gauche paramétrable de 0 à 100 %.
     */
    //% block="tourner à droite $vitesse_droite \\%"
    //% vitesse_droite.min=0 vitesse_droite.max=100 vitesse_droite.defl=75
    //% weight=70
    export function tourner_droite(vitesse_droite: number): void {
        _moteurs(0, vitesse_droite);
    }

    /**
     * Pivoter à gauche : le robot pivote sur place vers la gauche avec la vitesse paramétrable de 0 à 100 %.
     */
    //% block="pivoter à gauche $vitesse \\%"
    //% vitesse.min=0 vitesse.max=100 vitesse.defl=65
    //% weight=60
    export function pivoter_gauche(vitesse: number): void {
        _moteurs(vitesse, -vitesse);
    }

    /**
     * Pivoter à droite : le robot pivote sur place vers la droite avec la vitesse paramétrable de 0 à 100 %.
     */
    //% block="pivoter à droite $vitesse \\%"
    //% vitesse.min=0 vitesse.max=100 vitesse.defl=65
    //% weight=50
    export function pivoter_droite(vitesse: number): void {
        _moteurs(-vitesse, vitesse);
    }

    /**
     * S'arrêter : le robot s'arrête.
     */
    //% block="s'arrêter"
    //% weight=40
    export function s_arreter(): void {
        _moteurs(0, 0);
    }

    /**
     * Lire le capteur de gauche : le capteur de gauche retourne 1 sur une surface noire, 0 si blanc.
     */
    //% block="lire le capteur de gauche"
    //% weight=30
    export function lire_capteur_gauche(): number {
        return pins.digitalReadPin(brocheCapteurGauche);
    }

    /**
     * Lire le capteur de droite : le capteur de droite retourne 1 sur une surface noire, 0 si blanc.
     */
    //% block="lire le capteur de droite"
    //% weight=20
    export function lire_capteur_droit(): number {
        return pins.digitalReadPin(brocheCapteurDroit);
    }

    /**
     * Lire le capteur à l'avant : le capteur à l'avant retourne la distance de 0 à 400 cm.
     */
    //% block="lire le capteur à l'avant"
    //% weight=10
    export function lire_capteur_avant(): number {
        pins.digitalWritePin(brocheTrig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(brocheTrig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(brocheTrig, 0);

        let timeout = 10000;
        let start = input.runningTimeMicros();
        
        while (pins.digitalReadPin(brocheEcho) == 0) {
            if (input.runningTimeMicros() - start > timeout) {
                return 400;
            }
        }
        
        let startEcho = input.runningTimeMicros();
        while (pins.digitalReadPin(brocheEcho) == 1) {
            if (input.runningTimeMicros() - startEcho > timeout) {
                return 400;
            }
        }
        
        let endEcho = input.runningTimeMicros();
        let dureeEcho = endEcho - startEcho;

        let distanceCalculee = Math.idiv(dureeEcho, 58);
        
        if (distanceCalculee > 400) {
            return 400;
        }
        
        return distanceCalculee;
    }
}