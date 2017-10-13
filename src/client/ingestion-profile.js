const INGESTION_PROFILE_CONFIG_TYPE = 'ingestion profile';
const TAB_SOURCE = 'Source';
const TAB_GRAPH_SCHEMA = 'Graph Schema';
const TAB_MAPPING = 'Mapping';

/**
 * Creates a ingestion profile.
 * @param {string[]} sources - A list of data sources.
 * @param {object} graphSchema - The graph schema parsed from its YAML format.
 * @param {object} mapping - A key-value mapping in which the keys are full column names and the
 *                           values are corresponding full property names.
 * @return {object} A ingestion profile.
 */
function createIngestionProfile(sources, graphSchema, mapping) {
  return {
    sources,
    graphSchema,
    mapping,
  };
}

module.exports = {
  createIngestionProfile,
  INGESTION_PROFILE_CONFIG_TYPE,
  TAB_SOURCE,
  TAB_GRAPH_SCHEMA,
  TAB_MAPPING,
};
