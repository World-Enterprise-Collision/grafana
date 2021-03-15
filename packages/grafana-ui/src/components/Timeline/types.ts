import { GraphGradientMode, HideableFieldConfig } from '../uPlot/config';
import { VizLegendOptions } from '../VizLegend/types';

/**
 * @alpha
 */
export enum BarValueVisibility {
  Auto = 'auto',
  Never = 'never',
  Always = 'always',
}

/**
 * @alpha
 */
export interface TimelineOptions {
  legend: VizLegendOptions;
  showValue: BarValueVisibility;
  barWidth: number; // laneWidth
}

/**
 * @alpha
 */
export interface TimelineFieldConfig extends HideableFieldConfig {
  lineWidth?: number; // 0
  fillOpacity?: number; // 100
  gradientMode?: GraphGradientMode;
}

/**
 * @alpha
 */
export const defaultTimelineFieldConfig: TimelineFieldConfig = {
  lineWidth: 1,
  fillOpacity: 80,
  gradientMode: GraphGradientMode.None,
};

/**
 * @alpha
 */
export enum TimelineMode {
  Spans = 'spans',
  Grid = 'grid',
}