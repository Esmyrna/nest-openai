export class AiConstants {
  static readonly _prompt: string = `based on this given data about the climatology of said region:
<ObjectPlaceholder>
make some sugestions and analysis, taking in consideration that it's focused on the production of <CropsPlaceholder>, a JSON Object and nothing more (no messages or other outside of the json snippet) that satisfies the following interfaces:

interface RecommendationAction {
  [key: string]: string; // Chave representando o tipo de ação e valor sendo a descrição
}

interface Recommendation {
  description: string;
  action: RecommendationAction;
}

interface Tool {
  description: string;
}

interface Recommendations {
  temperature: Recommendation;
  humidityAndPrecipitation: Recommendation;
  evaporation: Recommendation;
  soilMoisture: Recommendation;
  ozoneAndUv: Recommendation;
}

interface Tools {
  plantingSchedule: Tool;
  irrigationManagement: Tool;
  soilConservation: Tool;
  uvMonitoring: Tool;
}

interface AgriculturalRecommendations {
  recommendations: Recommendations;
  tools: Tools;
}
`;
}
